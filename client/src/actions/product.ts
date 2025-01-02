'use server';

import { notFound, redirect } from 'next/navigation';
import fs from 'fs/promises';
import db from '@/db/db';
import { addSchema, editSchema } from '@/lib/schema';
import { cache } from '@/lib/cache';
import { revalidatePath } from 'next/cache';

export const addProduct = async (prevState: unknown, formData: FormData) => {
  const result = addSchema.safeParse(Object.fromEntries(formData.entries()));
  if (result.success === false) {
    return result.error.formErrors.fieldErrors;
  }

  const data = result.data;

  await fs.mkdir('public/products', { recursive: true });
  const imagePath = `/products/${crypto.randomUUID()}-${data.image.name}`;
  await fs.writeFile(
    `public${imagePath}`,
    Buffer.from(await data.image.arrayBuffer()),
  );

  await db.product.create({
    data: {
      isAvailableForPurchase: false,
      name: data.name,
      description: data.description,
      priceInCents: data.priceInCents,
      imagePath,
    },
  });

  revalidatePath('/');
  revalidatePath('/products');
  redirect('/admin/products');
};

export const updateProduct = async (
  id: string,
  prevState: unknown,
  formData: FormData,
) => {
  const result = editSchema.safeParse(Object.fromEntries(formData.entries()));
  if (result.success == false) {
    return result.error.formErrors.fieldErrors;
  }

  const data = result.data;
  const product = await db.product.findUnique({ where: { id } });

  if (product === null) return notFound();

  let imagePath = product.imagePath;
  if (data.image != null && data.image.size > 0) {
    await fs.unlink(`public${product.imagePath}`);
    imagePath = `/products/${crypto.randomUUID()}-${data.image.name}`;
    await fs.writeFile(
      `public${imagePath}`,
      Buffer.from(await data.image.arrayBuffer()),
    );
  }

  await db.product.update({
    where: { id },
    data: {
      name: data.name,
      description: data.description,
      priceInCents: data.priceInCents,
      imagePath,
    },
  });

  revalidatePath('/');
  revalidatePath('/products');
  redirect('/admin/products');
};

export const toggleProductAvailability = async (
  id: string,
  isAvailableForPurchase: boolean,
) => {
  await db.product.update({
    where: { id },
    data: {
      isAvailableForPurchase,
    },
  });

  revalidatePath('/');
  revalidatePath('/products');
};

export const deleteProduct = async (id: string) => {
  const product = await db.product.delete({ where: { id } });
  if (product == null) return notFound();

  await fs.unlink(`public${product.imagePath}`);

  revalidatePath('/');
  revalidatePath('/products');
};

export const getMostPopularProducts = cache(
  async () => {
    return db.product.findMany({
      where: { isAvailableForPurchase: true },
      orderBy: { orders: { _count: 'desc' } },
      take: 6,
    });
  },
  ['/', 'getMostPopularProducts'],
  { revalidate: 60 * 60 * 24 },
);

export const getNewestProducts = cache(async () => {
  return db.product.findMany({
    where: { isAvailableForPurchase: true },
    orderBy: { createdAt: 'desc' },
    take: 6,
  });
}, ['/', 'getNewestProducts']);

export const getProducts = cache(async () => {
  return db.product.findMany({
    where: { isAvailableForPurchase: true },
    orderBy: { name: 'asc' },
  });
}, ['/products', 'getProducts']);

export const getProduct = cache(
  async (id: string) => {
    return db.product.findUnique({
      where: { id },
    });
  },
  ['/products', 'getProduct'],
);
