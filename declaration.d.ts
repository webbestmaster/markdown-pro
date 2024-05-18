/* global SVGSVGElement */

declare module "*.svg" {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    import React = require("react");
    export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
    const content: string;

    export default content;
}

declare module "*.png" {
    const content: string;

    export default content;
}

declare module "*.md" {
    const content: string;

    export default content;
}

declare module "*.txt" {
    const content: string;

    export default content;
}

declare const IS_PRODUCTION: unknown;

declare const BUILD_DATE_H: unknown;
