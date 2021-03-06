/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
import { ConfirmBid_sale_artwork$ref } from "./ConfirmBid_sale_artwork.graphql";
declare const _SelectMaxBid_sale_artwork$ref: unique symbol;
export type SelectMaxBid_sale_artwork$ref = typeof _SelectMaxBid_sale_artwork$ref;
export type SelectMaxBid_sale_artwork = {
    readonly increments: ReadonlyArray<{
        readonly display: string | null;
        readonly cents: number | null;
    } | null> | null;
    readonly internalID: string;
    readonly " $fragmentRefs": ConfirmBid_sale_artwork$ref;
    readonly " $refType": SelectMaxBid_sale_artwork$ref;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "SelectMaxBid_sale_artwork",
  "type": "SaleArtwork",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "increments",
      "storageKey": "increments(useMyMaxBid:true)",
      "args": [
        {
          "kind": "Literal",
          "name": "useMyMaxBid",
          "value": true
        }
      ],
      "concreteType": "BidIncrementsFormatted",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "display",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "cents",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "internalID",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "ConfirmBid_sale_artwork",
      "args": null
    }
  ]
};
(node as any).hash = 'ecbe558efe4a6120b077dce2b5916798';
export default node;
