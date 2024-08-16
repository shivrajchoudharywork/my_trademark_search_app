"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Status = () => {
  return (
    <div>
      <Card>
        <CardContent>
          <div className="pt-4 justify-between flex flex-col max-h-[300px] overflow-y-auto">
            <p className="font-semibold w-[100px] mb-2">Status</p>
            <div className="flex flex-row flex-wrap gap-3">
              <a
                className="block w-fit"
                href="/search/trademarks?q=nike&country=us&status=all"
              >
                <div>
                  <div className="px-3 py-2 flex flex-row items-center border rounded-xl text-tm-blue border-tm-blue bg-[#EEF4FF]">
                    <p className="text-sm cursor-pointer">All</p>
                  </div>
                </div>
              </a>
              <a
                className="block w-fit"
                href="/search/trademarks?q=nike&country=us&status=registered"
              >
                <div>
                  <div className="px-3 py-2 flex flex-row items-center border rounded-xl ">
                    <div
                      className="w-[10px] h-[10px] mr-1 rounded-full"
                      style={{ background: "rgb(18, 136, 7)" }}
                    />
                    <p className="text-sm cursor-pointer">Registered</p>
                  </div>
                </div>
              </a>
              <a
                className="block w-fit"
                href="/search/trademarks?q=nike&country=us&status=pending"
              >
                <div>
                  <div className="px-3 py-2 flex flex-row items-center border rounded-xl ">
                    <div
                      className="w-[10px] h-[10px] mr-1 rounded-full"
                      style={{ background: "rgb(237, 171, 44)" }}
                    />
                    <p className="text-sm cursor-pointer">Pending</p>
                  </div>
                </div>
              </a>
              <a
                className="block w-fit"
                href="/search/trademarks?q=nike&country=us&status=abandoned"
              >
                <div>
                  <div className="px-3 py-2 flex flex-row items-center border rounded-xl ">
                    <div
                      className="w-[10px] h-[10px] mr-1 rounded-full"
                      style={{ background: "rgb(232, 82, 82)" }}
                    />
                    <p className="text-sm cursor-pointer">Abandoned</p>
                  </div>
                </div>
              </a>
              <a
                className="block w-fit"
                href="/search/trademarks?q=nike&country=us&status=other"
              >
                <div>
                  <div className="px-3 py-2 flex flex-row items-center border rounded-xl ">
                    <div
                      className="w-[10px] h-[10px] mr-1 rounded-full"
                      style={{ background: "rgb(52, 152, 219)" }}
                    />
                    <p className="text-sm cursor-pointer">Other</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Status;
