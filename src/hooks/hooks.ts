import React from "react";
import { DependenciesContext } from "../services/DependenciesProvider";
import { IDependencies } from "../model";

export function useDependencies(): IDependencies {
  return React.useContext(DependenciesContext);
}
