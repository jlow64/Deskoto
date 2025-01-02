import { formatCurrency } from '@/lib/formatters';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Button } from './ui/button';
import Link from 'next/link';
import Image from 'next/image';

interface ProductCardProps {
  id: string;
  name: string;
  priceInCents: number;
  description: string;
  imagePath: string;
}
export const ProductCard = ({
  id,
  name,
  priceInCents,
  description,
  imagePath,
}: ProductCardProps) => {
  const classes = {
    container: 'flex flex-col overflow-hidden',
    content: 'flex-grow',
    description: 'line-clamp-4',
    button: 'w-full',
    image: 'relative w-full h-auto aspect-video',
  };
  return (
    <Card className={classes.container}>
      <div className={classes.image}>
        <Image src={imagePath} fill alt={name} />
      </div>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{formatCurrency(priceInCents / 100)}</CardDescription>
      </CardHeader>
      <CardContent className={classes.content}>
        <p className="description">{description}</p>
      </CardContent>
      <CardFooter>
        <Button className={classes.button} asChild size="lg">
          <Link href={`/products/${id}/purchase`}>Purchase</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export const ProductCardSkeleton = () => {
  const classes = {
    container: 'overflow-hidden flex flex-col animate-pulse',
    video: 'w-full aspec-video bg-gray-300',
    title: 'w-3/4 h-6 rounded-full bg-gray-300',
    description: 'w-1/2 h-4 rounded-full bg-gray-300',
    content: {
      container: 'space-y-2',
      type1: 'w-full h-4 rounded-full bg-gray-300',
      type2: 'w-3/4 h-4 rounded-full bg-gray-300',
    },
    button: 'w-full',
  };
  return (
    <Card className={classes.container}>
      <div className={classes.video} />
      <CardHeader>
        <CardTitle>
          <div className={classes.title} />
        </CardTitle>
        <CardDescription>
          <div className={classes.description} />
        </CardDescription>
      </CardHeader>
      <CardContent className={classes.content.container}>
        <div className={classes.content.type1} />
        <div className={classes.content.type1} />
        <div className={classes.content.type2} />
      </CardContent>
      <CardFooter>
        <Button className={classes.button} disabled size="lg"></Button>
      </CardFooter>
    </Card>
  );
};
