# J-Space Studio

J-Space Studio is a responsive, frontend-only product concept that turns the supplied **J-Space Cognition Suite** protocol into an inspectable workspace. It surfaces an active goal, live core signals, verified checkpoints, open questions, the next action, recovery paths, and a sequential task trace.

The interface intentionally preserves the original suite’s boundary: it **records and presents task state; it does not make decisions for the user**.

## What changed

| Original repository | J-Space Studio |
| --- | --- |
| Markdown Skill plus optional Python CLI controller | Interactive React workspace console |
| Installation and prompt-driven entry | Immediate browser-based demonstration |
| Ledger stored in `.jspace/` | Goal, evidence, warnings, trace, and next action rendered as a coherent visual system |
| Selective Markdown modules | Discoverable module library with focused loading states |

## Development

The project uses React, TypeScript, Vite, Tailwind CSS, and shadcn/ui components.

```bash
pnpm install
pnpm dev
```

To run the static production build:

```bash
pnpm check
pnpm build
```

## Source context

The design was informed by the J-Space Cognition Suite V3.6 repository supplied for this project. The source repository is distributed under Apache License 2.0; this product concept does not bundle or modify its original `j-space/` runtime files.

## Current scope

This version is a local interactive prototype with illustrative UI state. A practical next phase would connect the provided Python controller to real `.jspace` workspace ledgers and replace the demo trace with task data.

## Asset note

The production Manus preview references hosted generated visual assets. If you deploy this code outside Manus, replace those image URLs with assets hosted by your deployment platform or your own asset storage.
