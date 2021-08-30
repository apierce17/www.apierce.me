import React from 'react'
import { FaShopify } from "react-icons/fa"

function ShopifyIcon() {
    const tech = {fontSize: "1.5rem",color: "var(--techIcons)"}
    
    return (
        <span title="Shopify"><FaShopify style={tech}/></span>
    )
}

export default ShopifyIcon
