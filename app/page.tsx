// app/page.tsx
"use client"
import React, { useState } from "react";
import Header from "@/components/Header";
import Status from "@/components/Status";
import Filter from "@/components/Filter";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";

async function fetchData(value: string) {
  const response = await fetch("https://vit-tm-task.api.trademarkia.app/api/v3/us", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      input_query: value,
      input_query_type: "",
      sort_by: "default",
      status: [],
      exact_match: false,
      date_query: false,
      owners: [],
      attorneys: [],
      law_firms: [],
      mark_description_description: [],
      classes: [],
      page: 1,
      rows: 10,
      sort_order: "desc",
      states: [],
      counties: [],
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

export default function Home() {
  const [searchResults, setSearchResults] = useState<any>(null);
  // console.log(searchResults)

  const handleSearch = async (searchTerm: string) => {
    try {
      const results = await fetchData(searchTerm);
      setSearchResults(results);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  return (
    <main>
      <Header onSearch={handleSearch} />
      <div className="flex justify-between">
        <div className="flex-grow">
          <ScrollArea className="h-[100vh] rounded-md border mr-10">
            {searchResults?.body?.hits?.hits?.map((hit: any) => {
              const statusDate = new Date(hit._source.status_date * 1000);
              const registrationDate = new Date(
                hit._source.registration_date * 1000
                );
                const renewalDate = new Date(hit._source.renewal_date * 1000);
                
                return (
                  <Card
                  key={hit._id}
                  className="ml-10 mt-10 w-4/5 shadow-lg rounded-lg overflow-hidden"
                  >
                  <CardContent className="p-6 max-w-5xl mx-auto w-11/12 lg:w-7/10 lg:ml-10">
  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
    {/* <!-- Image Section --> */}
    <div className="flex justify-center items-center lg:col-span-1">
      <img src="/group-1000007911.svg" alt="" className="w-24 h-24 object-cover" />
    </div>
    {/* <!-- Identification and Live Sections --> */}
    <div className="lg:col-span-2 flex flex-col justify-between">
      <div className="flex justify-between mb-4">
        <div className="max-w-xs">
          <div className="font-semibold text-lg text-gray-800">
            {hit._source.search_bar.mark_identification}
          </div>
          <div className="text-gray-600 text-sm">
            {hit._source.search_bar.owner}
          </div>
        </div>

        <div className="text-right">
          <div className="font-semibold text-lg text-green-600">
            Live/{capitalizeName(hit._source.status_type)}
          </div>
          <div className="text-gray-500 text-sm">
            on {statusDate.toLocaleDateString()}
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="max-w-xs">
          <div className="font-semibold text-base text-gray-800">
            {hit._id}
          </div>
          <div className="text-gray-500 text-xs">
            {registrationDate.toLocaleDateString()}
          </div>
        </div>

        <div className="text-right">
          <div className="font-semibold text-base text-gray-800">
            Reload
          </div>
          <div className="text-gray-500 text-xs">
            {renewalDate.toLocaleDateString()}
          </div>
        </div>
      </div>
    </div>

    {/* <!-- Description and Class Sections --> */}
    <div className="lg:col-span-1 flex flex-col justify-between">
      <div className="flex-grow">
        <div className="font-semibold text-base text-gray-800">
          {hit._source.mark_description_description.join(" ").length > 70
            ? hit._source.mark_description_description.join(" ").slice(0, 70) + "..."
            : hit._source.mark_description_description.join(" ")}
        </div>
      </div>

      <div className="mt-4">
        <div className="font-semibold text-base text-gray-800">
          {hit._source.class_codes.map((class_code: any) => (
            <span
              key={class_code}
              className="inline-block bg-blue-100 text-blue-800 rounded-full px-2 py-1 text-xs mr-1"
            >
              Class {class_code}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
</CardContent>




                </Card>
              );
            })}
          </ScrollArea>
          
        </div>

        <div className="flex-shrink-0 w-1/4 mr-10 mt-10 space-y-4">
          <Status />
          <Filter
            capitalizeName={capitalizeName}
            aggregations={searchResults?.body?.aggregations || {}}
          />
        </div>
      </div>
    </main>
  );
}

function capitalizeName(name: string) {
  return name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
