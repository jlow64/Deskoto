'use client';

import { useTransition } from 'react';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { toggleProductAvailability, deleteProduct } from '@/actions';
import { useRouter } from 'next/navigation';

interface ActiveToggleDropdownMenuItemProps {
  id: string;
  isAvailableForPurchase: boolean;
}
export const ActiveToggleDropdownMenuItem = ({
  id,
  isAvailableForPurchase,
}: ActiveToggleDropdownMenuItemProps) => {
  const [isPending, startTransition] = useTransition();
  const title = isAvailableForPurchase ? 'Deactivate' : 'Activate';
  const router = useRouter();
  return (
    <DropdownMenuItem
      disabled={isPending}
      onClick={() => {
        startTransition(async () => {
          await toggleProductAvailability(id, !isAvailableForPurchase);
          router.refresh();
        });
      }}
    >
      {title}
    </DropdownMenuItem>
  );
};

interface DeleteDropdownItemProps {
  id: string;
  disabled: boolean;
}
export const DeleteDropdownItem = ({
  id,
  disabled,
}: DeleteDropdownItemProps) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  return (
    <DropdownMenuItem
      variant="destructive"
      disabled={disabled || isPending}
      onClick={() => {
        startTransition(async () => {
          await deleteProduct(id);
          router.refresh();
        });
      }}
    >
      Delete
    </DropdownMenuItem>
  );
};
