import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@radix-ui/react-scroll-area";

interface Aggregations {
  current_owners?: {
    buckets: { key: string }[];
  };
  law_firms?: {
    buckets: { key: string }[];
  };
  attorneys?: {
    buckets: { key: string }[];
  };
}

interface FilterProps {
  capitalizeName: (name: string) => string;
  aggregations: Aggregations;
}

const Filter: React.FC<FilterProps> = ({ capitalizeName, aggregations }) => {
  const currentOwners = aggregations.current_owners?.buckets || [];
  const lawFirms = aggregations.law_firms?.buckets || [];
  const attorneys = aggregations.attorneys?.buckets || [];

  return (
    <div>
      <Card>
        <CardContent className="pt-6">
          <Tabs defaultValue="owners" className="text-lg">
            <TabsList>
              <TabsTrigger value="owners">Owners</TabsTrigger>
              <TabsTrigger value="lawfirms">Law Firms</TabsTrigger>
              <TabsTrigger value="attorneys">Attorneys</TabsTrigger>
            </TabsList>

            <TabsContent value="owners">
              <ScrollArea>
                {currentOwners.length > 0 ? (
                  currentOwners.map((owner) => (
                    <div key={owner.key}>
                      <Checkbox /> <span className="overflow-scroll">{capitalizeName(owner.key)}</span>
                    </div>
                  ))
                ) : (
                  <div>No owners found</div>
                )}
              </ScrollArea>
            </TabsContent>

            <TabsContent value="lawfirms">
              <ScrollArea className="h-30">
                {lawFirms.length > 0 ? (
                  lawFirms.map((lawFirm) => (
                    <div key={lawFirm.key}>
                      <Checkbox /> <span className="overflow-scroll">{capitalizeName(lawFirm.key)}</span>
                    </div>
                  ))
                ) : (
                  <div>No law firms found</div>
                )}
              </ScrollArea>
            </TabsContent>

            <TabsContent value="attorneys">
              <ScrollArea>
                {attorneys.length > 0 ? (
                  attorneys.map((attorney) => (
                    <div key={attorney.key}>
                      <Checkbox /> <span className="overflow-scroll">{capitalizeName(attorney.key)}</span>
                    </div>
                  ))
                ) : (
                  <div>No attorneys found</div>
                )}
              </ScrollArea>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Filter;
