---
title: "Minecraft"
---

## GeyserMC / Floodgate

In order for GSA to pickup Bedrock players, you must configure the following setting in your GeyserMC `/plugins/floodgate/config.yml`:
```yaml
username-prefix: "."
```

### Bedrock chat
Add the following to `server.properties` so Bedrock players can chat:
```yaml
enforce-secure-profile=false
```