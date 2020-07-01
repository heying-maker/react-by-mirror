

import React from "react";
import { Route } from "mirrorx";
import { Mytest_ } from './mytest/container';



const Routers = ({ match }) => (
	<div>
		<Route exact path={`${match.url}/mediums`} component={Mytest_} />

        </div>
);
export default Routers;




