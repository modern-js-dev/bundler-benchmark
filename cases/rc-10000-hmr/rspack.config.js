const path = require("path");
const isProd = process.env.NODE_ENV === "production";
const { default: HtmlPlugin } = require("@rspack/plugin-html");
const HmrBenchmarkPlugin = require("./plugins/hmr-benchmark-plugin");
let index = 0;
console.log(isProd);
/** @type {import("@rspack/cli").Configuration} */
module.exports = {
	mode: isProd ? "production" : "development",
	resolve: {
		extensions: [".js", ".jsx"],
	},
	entry: { main: "./index.jsx" },
	builtins: {
		progress: {},
		html: [{ template: path.resolve(__dirname, "./index.html") }],
	},
	stats: {
		warnings: false,
	},
	experiments: {
		incrementalRebuild: true,
	},
	plugins: [
		new HmrBenchmarkPlugin({
			cases: [
				{
					type: "root",
					path: path.resolve(__dirname, "./src/f0.jsx"),
					generate: () => {
						return `
  import React from 'react'
  import Icon  from '@icon-park/react/es/all';

  import Component__0 from './d0/f0.jsx'
import Component__1 from './d0/f1.jsx'
import Component__2 from './d0/f2.jsx'
import Component__3 from './d0/f3.jsx'
import Component__4 from './d0/f4.jsx'
import Component__5 from './d0/f5.jsx'
import Component__6 from './d0/f6.jsx'
import Component__7 from './d0/f7.jsx'
import Component__8 from './d0/f8.jsx'
  function Navbar({ show }) {
    return (
      <div>
			${index++}
      <Component__0/>
<Component__1/>
<Component__2/>
<Component__3/>
<Component__4/>
<Component__5/>
<Component__6/>
<Component__7/>
<Component__8/>
      </div>
    )
  }
  
  export default Navbar
  
		
		`;
					},
				},
				{
					type: "leaf",
					path: path.resolve(__dirname, "src/d0/d0/d0/d0/f0.jsx"),
					generate: () => {
						return `

  import React, {useEffect} from 'react'
  import Icon  from '@icon-park/react/es/all';

  
  function Navbar({ show }) {
    useEffect(() => {
      console.log(Date.now());
    })
    return (
      <div>
      <span>    ${index++}  </span>
      {Date.now()}
      </div>
    )
  }
  
  export default Navbar
  
		
		`;
					},
				},
			],
		}),
	],
};
