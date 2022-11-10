import React, { useEffect, useState } from 'react';
import { Layout } from './layout/layout';
import { Home } from './screens/home/Home';
import { Business } from './screens/business/Business';
import { BusinessDetail } from './screens/BusinessDetail/BusinessDetail';
import { NotFound } from './layout/NotFound';
import { Routes, Route, Outlet, Link } from "react-router-dom";

export default function App() {
  return(
    <div>
<Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="doanh-nghiep" element={<Business />} />
      <Route path="business-detail/:id" element={<BusinessDetail />} />

      {/* Using path="*"" means "match anything", so this route
            acts like a catch-all for URLs that we don't have explicit
            routes for. */}
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
    </div>
  )
}