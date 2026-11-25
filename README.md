# SuperX & 鼓鼓AI Agent Skills

Official AI Agent Skills for [SuperX](https://superx.chat/art/) and [鼓鼓AI (aihuihua.ai)](https://aihuihua.ai/) — generate images, videos, music, and speech directly inside Claude Code, Codex, Cursor, WorkBuddy, OpenClaw, and other compatible AI agents using your own account points.

## Included Skills

| Skill | Website | Description |
|---|---|---|
| [`superx-studio`](./skills/superx-studio) | [superx.chat](https://superx.chat/art/) | AI image, video, music, TTS, upscale, face-swap & background removal via SuperX |
| [`aihuihua-studio`](./skills/aihuihua-studio) | [aihuihua.ai](https://aihuihua.ai/) | AI image, video, music, TTS, upscale, face-swap & background removal via 鼓鼓AI |

## Installation

### Via `skills` CLI (Vercel / skills.sh)

```bash
# Install SuperX skill
npx skills add waitkafuka/superx-skills --skill superx-studio

# Install 鼓鼓AI skill
npx skills add waitkafuka/superx-skills --skill aihuihua-studio

# Or install all skills in this repo
npx skills add waitkafuka/superx-skills
```

### Via `npm` / `npx`

```bash
# Install SuperX skill to ~/.claude/skills/superx-studio
npx superx-studio

# Install 鼓鼓AI skill to ~/.claude/skills/aihuihua-studio
npx aihuihua-studio
```

### Via ClawHub

```bash
npx clawhub install superx-studio
npx clawhub install aihuihua-studio
```

## Requirements

- Node.js >= 20 (zero external dependencies)
