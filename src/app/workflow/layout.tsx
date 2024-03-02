"use client";

import React, { PropsWithChildren } from "react";
import { ReactFlowProvider } from "reactflow";

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <ReactFlowProvider>
      <main className="flex">
        <div className="flex-1">{children}</div>
      </main>
    </ReactFlowProvider>
  );
};

export default DashboardLayout;
