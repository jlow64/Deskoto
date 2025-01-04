import Image from 'next/image';
import Stripe from 'stripe';
import { formatCurrency } from '@/lib/formatters';
import db from '@/db/db';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

type TSearchParams = {
  searchParams: {
    payment_intent: string;
  };
};
export default async function SuccessPage({ searchParams }: TSearchParams) {
  const paymentIntent = await stripe.paymentIntents.retrieve(
    searchParams.payment_intent,
  );

  if (paymentIntent.metadata.productId == null) return notFound();

  const product = await db.product.findUnique({
    where: { id: paymentIntent.metadata.productId },
  });
  if (product == null) return notFound();

  const isSuccess = paymentIntent.status === 'succeeded';

  const classes = {
    container: 'max-w-5xl w-full mx-auto space-y-8',
    title: 'text-4xl font-bold',
    productInfo: 'flex gap-4 items-center',
    name: 'text-2xl font-bold',
    image: 'aspect-video flex-shrink-0 w-1/3 relative',
    price: 'text-lg',
    description: 'line-clamp-3 text-muted-foreground',
    button: 'mt-4',
  };
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>{isSuccess ? 'Success' : 'Error!'}</h1>
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
      <Button className={classes.button} size="lg" asChild>
        {isSuccess ? (
          <Link href="/">Shop again</Link>
        ) : (
          <Link href={`/products/${product.id}/purchase`}>Try Again</Link>
        )}
      </Button>
    </div>
  );
}
