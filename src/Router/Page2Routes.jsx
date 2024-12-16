import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParameter";

export const Page2Routes = [
  { index: true, element: <Page2 /> },
  { path: ":id", element: <UrlParameter /> }
];
