'use client'
import React, { useEffect } from "react";

type AdBannerTypes = {
    dataAdSlot: string;
    dataAdFormat: string;
    dataFullWidthResponsive: boolean;
}

export function AdBanner({dataAdFormat, dataAdSlot, dataFullWidthResponsive}: AdBannerTypes){
    useEffect(() => {
        try {
          ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
            {}
          );
        } catch (error: any) {
          console.log(error.message);
        }
      }, []);
    
      return (
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client={`ca-pub-${process.env.PUB_ID}`}
          data-ad-slot={dataAdSlot}
          data-ad-format={dataAdFormat}
          data-full-width-responsive={dataFullWidthResponsive.toString()}
        ></ins>
      );
    };
    