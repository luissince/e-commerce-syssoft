import React from "react";
import { importClientComponents } from '@/app/lib/utils/importClientComponents'

async function Page() {
  const { Main } = await importClientComponents();
  return <Main />;
}

export default Page;
