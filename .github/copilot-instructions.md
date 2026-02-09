# Copilot Instructions - Ejercicio2

## Project Overview
**Angular 21** standalone application with SSR (Server-Side Rendering) support. Built with Vitest for unit testing and Prettier for code formatting. This is a learning project focusing on Angular signals and component state management.

## Architecture

### Core Structure
- **[src/app/app.ts](../src/app/app.ts)**: Root component (standalone) with signal-based counter state
- **[src/app/pages/hero-page.component.ts](../src/app/pages/hero-page.component.ts)**: Example component demonstrating signals and computed properties
- **[src/app/app.config.ts](../src/app/app.config.ts)**: Application bootstrap config with router, error handlers, and hydration settings
- **[src/app/app.routes.ts](../src/app/app.routes.ts)**: Route definitions (currently empty, hero route defined but not wired)

### Key Architectural Patterns

**1. Standalone Components** - All components use `standalone: true` (no NgModules)
```typescript
@Component({
  standalone: true,
  imports: [CommonModule],
  // ...
})
```

**2. Angular Signals** - Primary state management mechanism
- Use `signal<Type>(initialValue)` for reactive state
- Access with function call: `name()` returns value
- Update with `.set(value)` method
- Create computed derived state with `computed(() => ...)`
- Example: [hero-page.component.ts](../src/app/pages/hero-page.component.ts) lines 5-6

**3. Event Binding** - Use `(click)="methodName()"` in templates
- Example: [app.html](../src/app/app.html) button event bindings
- Always use parentheses syntax, not deprecated `on-` syntax

### SSR Configuration
- Server entry point: [src/server.ts](../src/server.ts)
- Main server: [src/main.server.ts](../src/main.server.ts)
- Express-based with hydration support (`withEventReplay()`)
- Build outputs both client and server bundles to `dist/`

## Development Workflows

### Starting Development
```bash
npm start
# Serves on http://localhost:4200/ with hot reload
```

### Building
```bash
npm run build          # Production optimized build (default)
npm run watch         # Watch mode for development
npm run serve:ssr:ejercicio2  # Run SSR server
```

### Testing
```bash
npm test              # Vitest runner, watches changes
# Tests use jsdom for DOM simulation (no browser required)
```

### Code Quality
- **Prettier** auto-formats on save (single quotes, 100-char print width, angular parser for templates)
- **TypeScript strict mode enabled** - No implicit returns, implicit any errors, or property access from indexSignature

## Project Conventions

### File Organization
```
src/
  app/
    app.ts             # Root component
    app.html           # Root template
    app.css            # Global styles
    app.routes.ts      # Route definitions
    app.config.ts      # Configuration
    pages/             # Page components
```

### Component Creation
- Use standalone components (already default)
- Place components in `pages/` directory
- Name files: `component-name.component.ts` and `.component.html`
- Use signals for state, not class properties

### TypeScript Configuration
- `"strict": true` enforced - write type-safe code
- `"noImplicitReturns": true` - all code paths must return
- Target: ES2022

## Known Issues & Quirks

### Route Definition Bug
[app.routes.ts](../src/app/app.routes.ts) has syntax errors - the hero route is defined outside the routes array. Needs correction:
```typescript
export const routes: Routes = [
  {
    path: 'hero',
    component: HeroPageComponent
  }
];
```

### Template Issues
[hero-page.component.html](../src/hero-page.component.html) has incorrect syntax mixing signal invocations with template comments. Clean up to use proper interpolation and method calls only.

## Dependencies
- **@angular/***: Core framework packages (v21.0.0)
- **rxjs**: Reactive programming (~7.8.0)
- **@angular/ssr**: SSR support
- **express**: Server framework (v5.1.0)
- **vitest**: Unit testing framework (v4.0.8)
- **jsdom**: DOM simulation for tests

## Common Commands Reference
| Task | Command |
|------|---------|
| Dev server | `npm start` |
| Build | `npm build` |
| Unit tests | `npm test` |
| Generate component | `ng generate component component-name` |
| Lint/format | Run Prettier (integrated in editor) |

## When Modifying Code
- Always preserve the `standalone: true` pattern in components
- Use signals for state, avoid direct property mutation
- Add tests in `*.spec.ts` files using Vitest
- Check SSR compatibility when adding browser-specific code
- Follow Prettier formatting (100-char lines, single quotes)
