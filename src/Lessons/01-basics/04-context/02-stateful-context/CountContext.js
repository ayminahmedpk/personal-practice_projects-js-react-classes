// Best to create in a separate file
// Parent and grandchild will need to import .Provider and .Consumer respectively

import React from "react";

const CountContext = React.createContext(); // can pass default value - ignored for now

export default CountContext;

// Context is simply a TRANSPORT mechanism - without prop drilling

// For presitent changes, stateful logic should be implemented at Parent and
// appropriate items (count + handlers) must be passed as value