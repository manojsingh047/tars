import { Base, MbscCoreOptions } from '../core/core';

export interface MbscScrollViewOptions extends MbscCoreOptions {
    // settings
    context?: string | HTMLElement;
    itemWidth?: number;
    layout?: 'liquid' | 'fixed';

    // Events
    onItemTap?(event: { target: HTMLElement }, inst: any): void;
    onMarkupReady?(event: { target: HTMLElement }, inst: any): void;
    onAnimationStart?(event: any, inst: any): void;
    onAnimationEnd?(event: any, inst: any): void;
    onMove?(event: any, inst: any): void;
    onGestureStart?(event: any, inst: any): void;
    onGestureEnd?(event: any, inst: any): void;
}

export class ScrollView extends Base {
    settings: MbscScrollViewOptions;

    constructor(element: any, settings: MbscScrollViewOptions);
    
    navigate(item: any, toggle?: boolean): void;
    next(toggle?: boolean): void;
    prev(toggle?: boolean): void;
    refresh(noScroll?: boolean): void;
}
