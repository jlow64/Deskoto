'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { formatCurrency } from '@/lib/formatters';
import {
  Elements,
  LinkAuthenticationElement,
  PaymentElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Image from 'next/image';
import { FormEvent, useState } from 'react';

type TCheckoutForm = {
  product: {
    id: string;
    imagePath: string;
    name: string;
    priceInCents: number;
    description: string;
  };
  clientSecret: string;
};

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string,
);

export const CheckoutForm = ({ product, clientSecret }: TCheckoutForm) => {
  const classes = {
    container: 'max-w-5xl w-full mx-auto space-y-8',
    productInfo: 'flex gap-4 items-center',
    name: 'text-2xl font-bold',
    image: 'aspect-video flex-shrink-0 w-1/3 relative',
    price: 'text-lg',
    description: 'line-clamp-3 text-muted-foreground',
  };
  return (
    <div className={classes.container}>
      <div className={classes.productInfo}>
        <div className={classes.image}>
          <Image
            src={product.imagePath}
            fill
            alt={product.name}
            className="object-cover"
          />
        </div>
        <div>
          <div className={classes.price}>
            {formatCurrency(product.priceInCents / 100)}
          </div>
          <h1 className={classes.name}>{product.name}</h1>
          <div className={classes.description}>{product.description}</div>
        </div>
      </div>
      <Elements options={{ clientSecret }} stripe={stripePromise}>
        <Form productId={product.id} priceInCents={product.priceInCents} />
      </Elements>
    </div>
  );
};

type IForm = {
  productId: string;
  priceInCents: number;
};
const Form = ({ productId, priceInCents }: IForm) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>();
  const [email, setEmail] = useState<string>();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (stripe == null || elements == null || email == null) return;

    setIsLoading(true);

    stripe
      .confirmPayment({
        elements,
        confirmParams: {
          return_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/stripe/purchase-success`,
        },
      })
      .then(({ error }) => {
        if (error.type === 'card_error' || error.type === 'validation_error') {
          setErrorMessage(error.message);
        } else {
          setErrorMessage('An unknown error occured.');
        }
      })
      .finally(() => setIsLoading(false));
  };

  const isDisabled = stripe == null || elements == null || isLoading;
  const title = isLoading
    ? 'Purchasing...'
    : `Purchase - ${formatCurrency(priceInCents / 100)}`;

  const classes = {
    button: 'w-full',
  };
  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>
          <CardTitle>Checkout</CardTitle>
          {errorMessage && (
            <CardDescription className="text-destructive">
              {errorMessage}
            </CardDescription>
          )}
        </CardHeader>
        <CardContent>
          <PaymentElement />
          <div className="mt-4">
            <LinkAuthenticationElement
              onChange={(e) => setEmail(e.value.email)}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button className={classes.button} size="lg" disabled={isDisabled}>
            {title}
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
};
