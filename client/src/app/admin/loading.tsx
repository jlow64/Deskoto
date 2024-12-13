import { Loader2 } from 'lucide-react';

export default function AdminLoading() {
  const classes = {
    container: 'flex justify-center',
    loader: 'size-24 animate-spin',
  };
  return (
    <div className={classes.container}>
      <Loader2 className={classes.loader} />
    </div>
  );
}
