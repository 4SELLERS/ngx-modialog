import {
  ComponentRef,
  Injector,
  ViewContainerRef
} from '@angular/core';

export interface CreateComponentArgs {
  component: any;
  vcRef: ViewContainerRef;
  injector?: Injector;
  projectableNodes?: any[][];
}

export function createComponent(instructions: CreateComponentArgs): ComponentRef<any> {
  const injector: Injector = instructions.injector || instructions.vcRef.injector;

  return instructions.vcRef.createComponent(instructions.component, {
    index: instructions.vcRef.length,
    injector,
    projectableNodes: instructions.projectableNodes
  });
}
