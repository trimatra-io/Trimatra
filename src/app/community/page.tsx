"use client";
import React from "react";
import { InstagramEmbed } from "react-social-media-embed";

const CommunityPage = () => {
  return (
    <div>
      <div className="w-full h-screen py-10 xl:py-20">
        <div className="container mx-auto">
          <h1 className="text-3xl text-center font-bold py-4">
            Join Our Community
          </h1>
          <div className="py-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            <div>
              <iframe
                src="https://discord.com/widget?id=720952817094885397&theme=dark"
                width="350"
                height="500"
              ></iframe>
            </div>
            <div>
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftrimatra.io&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="340"
                height="500"
              ></iframe>
            </div>
            <div className="flex justify-center">
              <InstagramEmbed
                url="https://www.instagram.com/p/C0d_n2fPyzZ/"
                width={340}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
