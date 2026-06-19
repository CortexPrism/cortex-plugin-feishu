// deno-lint-ignore-file require-await, no-unused-vars
import type { PluginContext, Tool, ToolResult } from 'cortex/plugins';
function ok(n: string, o: unknown, s: number): ToolResult {
  return {
    toolName: n,
    success: true,
    output: JSON.stringify(o, null, 2),
    durationMs: Date.now() - s,
  };
}

const feishu_send_messageTool: Tool = {
  definition: {
    name: 'feishu_send_message',
    description: 'Send interactive card message to Feishu chat',
    params: [],
    capabilities: ['network:fetch'],
  },
  execute: async (args, ctx) => {
    const s = Date.now();
    try {
      ctx.logger.info('[feishu] feishu_send_message executed');
      return ok('feishu_send_message', { status: 'completed', result: 'stub' }, s);
    } catch (e) {
      return {
        toolName: 'feishu_send_message',
        success: false,
        output: '',
        error: String(e),
        durationMs: Date.now() - s,
      };
    }
  },
};

const feishu_create_docTool: Tool = {
  definition: {
    name: 'feishu_create_doc',
    description: 'Create a Feishu document with content',
    params: [],
    capabilities: ['network:fetch'],
  },
  execute: async (args, ctx) => {
    const s = Date.now();
    try {
      ctx.logger.info('[feishu] feishu_create_doc executed');
      return ok('feishu_create_doc', { status: 'completed', result: 'stub' }, s);
    } catch (e) {
      return {
        toolName: 'feishu_create_doc',
        success: false,
        output: '',
        error: String(e),
        durationMs: Date.now() - s,
      };
    }
  },
};

const feishu_list_groupsTool: Tool = {
  definition: {
    name: 'feishu_list_groups',
    description: 'List chat groups and channels',
    params: [],
    capabilities: ['network:fetch'],
  },
  execute: async (args, ctx) => {
    const s = Date.now();
    try {
      ctx.logger.info('[feishu] feishu_list_groups executed');
      return ok('feishu_list_groups', { status: 'completed', result: 'stub' }, s);
    } catch (e) {
      return {
        toolName: 'feishu_list_groups',
        success: false,
        output: '',
        error: String(e),
        durationMs: Date.now() - s,
      };
    }
  },
};

const feishu_get_calendarTool: Tool = {
  definition: {
    name: 'feishu_get_calendar',
    description: 'Get calendar events and schedule',
    params: [],
    capabilities: ['network:fetch'],
  },
  execute: async (args, ctx) => {
    const s = Date.now();
    try {
      ctx.logger.info('[feishu] feishu_get_calendar executed');
      return ok('feishu_get_calendar', { status: 'completed', result: 'stub' }, s);
    } catch (e) {
      return {
        toolName: 'feishu_get_calendar',
        success: false,
        output: '',
        error: String(e),
        durationMs: Date.now() - s,
      };
    }
  },
};

export async function onLoad(ctx: PluginContext): Promise<void> {
  ctx.logger.info('[cortex-plugin-feishu] Loaded');
}
export async function onUnload(ctx: PluginContext): Promise<void> {
  ctx.logger.info('[cortex-plugin-feishu] Unloading...');
}
export const tools: Tool[] = [
  feishu_send_messageTool,
  feishu_create_docTool,
  feishu_list_groupsTool,
  feishu_get_calendarTool,
];
