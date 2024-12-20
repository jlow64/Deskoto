'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ErrorMessage } from '@/components/ErrorMessage';
import { formatCurrency } from '@/lib/formatters';
import { useActionState, useState } from 'react';
import { useFormStatus } from 'react-dom';
import { addProduct, updateProduct } from '@/actions';
import { Product } from '@prisma/client';
import Image from 'next/image';

interface ProductFormType {
  product?: Product | null;
}
export function ProductForm({ product }: ProductFormType) {
  const actionCallback =
    product == null ? addProduct : updateProduct.bind(null, product.id);
  const [error, action] = useActionState(actionCallback, {});
  const [priceInCents, setPriceInCents] = useState<number | undefined>(
    product?.priceInCents,
  );

  const classes = {
    container: 'space-y-8 py-4',
    items: 'space-y-2',
    muted: 'text-muted-foreground',
  };
  return (
    <form action={action} className={classes.container}>
      <div className={classes.items}>
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          id="name"
          name="name"
          required
          defaultValue={product?.name || ''}
        />
        {error.name && <ErrorMessage>{error.name}</ErrorMessage>}
      </div>
      <div className={classes.items}>
        <Label htmlFor="priceInCents">Price in Cents</Label>
        <Input
          type="number"
          id="priceInCents"
          name="priceInCents"
          required
          value={priceInCents}
          onChange={(e) => setPriceInCents(Number(e.target.value) || undefined)}
        />
        <div className={classes.muted}>
          {formatCurrency((priceInCents || 0) / 100)}
        </div>
        {error.priceInCents && (
          <ErrorMessage>{error.priceInCents}</ErrorMessage>
        )}
      </div>
      <div className={classes.items}>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          name="description"
          required
          defaultValue={product?.description || ''}
        />
        {error.description && <ErrorMessage>{error.description}</ErrorMessage>}
      </div>
      <div className={classes.items}>
        <Label htmlFor="image">Image</Label>
        <Input type="file" id="image" name="image" required={product == null} />
        {product != null && (
          <Image
            src={product.imagePath}
            height="400"
            width="500"
            alt="Product Image"
          />
        )}
        {error.image && <ErrorMessage>{error.image}</ErrorMessage>}
      </div>
      <SubmitButton />
    </form>
  );
}

const SubmitButton = () => {
  const { pending } = useFormStatus();
  const title = pending ? 'Saving...' : 'Save';
  return (
    <Button type="submit" disabled={pending}>
      {title}
    </Button>
  );
};
