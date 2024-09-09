import { setIsOpenModal } from "@/redux/productModalSlice";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const ProductInfo = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const dispatch = useDispatch();

  useEffect(() => {
    if (!id) {
      dispatch(setIsOpenModal(false));
    } else {
      dispatch(setIsOpenModal(true));
    }
  }, []);

  return (
    <div className="w-screen h-screen bg-black/20">
      <div className="w-[70vw]">Product {id}</div>
    </div>
  );
};

export default ProductInfo;
