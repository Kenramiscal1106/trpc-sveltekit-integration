import { initTRPC } from '@trpc/server';
import { Context } from './context';

export const t = initTRPC.context<Context>().create();

export const router = t.router({
	greeting: t.procedure.query(async () => {
		return `Hello tRPC v10 @ ${new Date().toLocaleTimeString()}`;
	}),
	randomData: t.procedure.query(async () => {
		return {
			json: 'blob'
		};
	})
});

export type Router = typeof router;
