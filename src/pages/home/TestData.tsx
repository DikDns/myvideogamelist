"use client";

import { useEffect } from "react";

export default function TestData(data: any) {
  useEffect(() => {
    console.log(data);
  }, []);

  return <p>TEST DATA</p>;
}
