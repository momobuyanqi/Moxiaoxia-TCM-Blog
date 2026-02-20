---
author: momo
description: '```markdown 洞穴虾类分类简介  洞穴虾类（Cave Shrimps）主要属于十足目（Decapoda），根据其对洞穴环境的适应程度和分类学特征，通常可以从以下两个维度进行分类：  1.
  按生态习性分类 (Ecological Classification) 根据虾类对洞穴环境的依赖程度，...'
draft: false
featured: false
pubDatetime: 2026-02-20 00:00:00
slug: moxiaoxia-openclawan-zhuang-bi-ji
tags: []
title: moxiaoxia openclaw安装笔记
---

```markdown
# 洞穴虾类分类简介

洞穴虾类（Cave Shrimps）主要属于十足目（Decapoda），根据其对洞穴环境的适应程度和分类学特征，通常可以从以下两个维度进行分类：

### 1. 按生态习性分类 (Ecological Classification)
根据虾类对洞穴环境的依赖程度，生物学家将其分为三类：

*   **真洞穴生物 (Troglobites):** 终生生活在洞穴深处的黑暗环境中。它们具有显著的退化特征，如眼睛退化或完全消失、身体缺乏色素（呈现透明或白色）、触角极长以增强感知。
*   **喜洞生物 (Troglophiles):** 可以在洞穴内完成生命周期，但也常见于洞穴外的阴暗环境（如地下水出口）。它们对黑暗环境有一定适应性，但未完全退化。
*   **偶入洞穴生物 (Trogloxenes):** 偶然进入洞穴的种类，无法在洞穴内长期生存或繁衍。

### 2. 按分类学家族划分 (Taxonomic Classification)
在洞穴环境中，最常见的虾类主要集中在以下几个科：

*   **匙指虾科 (Atyidae):** 
    *   这是洞穴虾类中最庞大的家族。
    *   **代表属:** 米虾属 (*Caridina*)、盲虾属 (*Typhlatya*)。
    *   **特征:** 螯肢末端有刷状毛，用于滤食或刮食水中的有机碎屑。
*   **长臂虾科 (Palaemonidae):**
    *   包含许多著名的洞穴种类，部分种类体型较大。
    *   **代表属:** 沼虾属 (*Macrobrachium*)、长臂虾属 (*Palaemon*)。
    *   **特征:** 第二对步足通常异常发达，呈长螯状。
*   **希比虾科 (Barbouriidae):**
    *   主要分布于沿海的锚盐洞穴（Anchialine caves）中。
    *   **代表属:** *Parhippolyte*。
*   **折尾虾科 (Aeglidae) 与 螯虾类 (Astacoidea):**
    *   在某些地区的淡水洞穴中，也会发现特化的洞穴螯虾（Cave Crayfish）。

### 3. 演化特征 (Morphological Adaptations)
*   **视力退化:** 视觉器官萎缩，视神经退化。
*   **色素缺失:** 身体呈现半透明或纯白色，以节省合成色素的能量。
*   **代谢减缓:** 为了适应洞穴内贫瘠的食物来源，其代谢率通常极低，寿命较长。
*   **感官增强:** 触角和步足变得纤细且修长，布满化学和机械感受器。
```


# step001
检测系统是否安装openclaw，如果安装就彻底删除干净。
```bash
# 检查并彻底删除 openclaw
if command -v openclaw >/dev/null 2>&1 || [ -d "/usr/local/share/openclaw" ]; then
    echo "检测到 openclaw，开始清理..."
    
    # 停止可能运行的进程
    sudo pkill -9 openclaw 2>/dev/null
    
    # 删除二进制文件
    sudo rm -f /usr/local/bin/openclaw
    sudo rm -f /usr/bin/openclaw
    
    # 删除安装目录和资源文件
    sudo rm -rf /usr/local/share/openclaw
    sudo rm -rf /usr/share/openclaw
    
    # 删除用户配置和存档
    rm -rf ~/.config/openclaw
    rm -rf ~/.local/share/openclaw
    
    echo "openclaw 已彻底删除。"
else
    echo "系统中未检测到 openclaw。"
fi
```
```bash
    # 删除共享数据目录
    sudo rm -rf /usr/local/share/openclaw
    
    # 删除用户配置文件和数据
    rm -rf ~/.config/openclaw
    rm -rf ~/.local/share/openclaw
    
    # 删除可能的 systemd 服务文件
    sudo rm -f /etc/systemd/system/openclaw.service
    sudo systemctl daemon-reload 2>/dev/null
    
    echo "openclaw 已彻底删除。"
else
    echo "未检测到 openclaw。"
fi
```
# step002
```bash
# 检查并彻底删除 openclaw
if command -v openclaw >/dev/null 2>&1 || [ -d "/usr/local/share/openclaw" ]; then
    echo "检测到 openclaw，开始清理..."
    
    # 停止可能运行的进程
    sudo pkill -9 openclaw 2>/dev/null
    
    # 删除二进制文件
    sudo rm -f /usr/local/bin/openclaw
    sudo rm -f /usr/bin/openclaw
    
    # 删除安装目录和资源文件
    sudo rm -rf /usr/local/share/openclaw
    sudo rm -rf /usr/share/openclaw
    
    # 删除用户配置和存档
    rm -rf ~/.config/openclaw
    rm -rf ~/.local/share/openclaw
    
    echo "openclaw 已彻底删除。"
else
    echo "系统中未检测到 openclaw。"
fi
```

# step003
在官网拷贝：curl -fsSL https://openclaw.ai/install.sh | bash
，粘贴到终端回车。

# step004
配置Discord bot token 
打开网站：https://discord.com/developers/applications

Kimi code api key 
[REDACTED_KIMI_KEY]

Gateway token (blank to generate)
│  [REDACTED_GATEWAY_TOKEN]

Discord tokey
[REDACTED_DISCORD_TOKEN]


# wygg的openclaw.json
{
  "meta": {
    "lastTouchedVersion": "2026.2.2-3",
    "lastTouchedAt": "2026-02-08T17:15:28.180Z"
  },
  "wizard": {
    "lastRunAt": "2026-02-08T17:15:28.167Z",
    "lastRunVersion": "2026.2.2-3",
    "lastRunCommand": "configure",
    "lastRunMode": "local"
  },
  "auth": {
    "profiles": {
      "kimi-coding:default": {
        "provider": "kimi-coding",
        "mode": "api_key"
      }
    }
  },
  "agents": {
    "defaults": {
      "model": {
        "primary": "kimi-coding/k2p5"
      },
      "models": {
        "kimi-coding/k2p5": {
          "alias": "Kimi K2.5"
        }
      },
      "workspace": "/Users/wygg/.openclaw/workspace",
      "compaction": {
        "mode": "safeguard"
      },
      "maxConcurrent": 4,
      "subagents": {
        "maxConcurrent": 8
      }
    }
  },
  "messages": {
    "ackReactionScope": "group-mentions"
  },
  "commands": {
    "native": "auto",
    "nativeSkills": "auto",
    "restart": true
  },
  "channels": {
    "discord": {
      "enabled": true,
      "token": "[REDACTED_DISCORD_TOKEN]",
      "groupPolicy": "allowlist",
      "guilds": {
        "924682486657740821": {
          "channels": {
            "1470099300762648749": {
              "allow": true
            }
          }
        }
      }
    },
    "feishu": {
      "enabled": true,
      "appId": "cli_a909e0f0e138dcbb",
      "appSecret": "[REDACTED_FEISHU_SECRET]",
      "domain": "feishu",
      "dmPolicy": "open",
      "botName": "王小虾",
      "blockStreaming": true
    }
  },
  "gateway": {
    "port": 18789,
    "mode": "local",
    "bind": "loopback",
    "auth": {
      "mode": "token",
      "token": "[REDACTED_TOKEN]"
    },
    "tailscale": {
      "mode": "off",
      "resetOnExit": false
    }
  },
  "plugins": {
    "entries": {
      "feishu": {
        "enabled": true
      },
      "discord": {
        "enabled": true
      }
    }
  }




# 新配置momo的discord 
"channels": {
    "discord": {
      "enabled": true,
      "token": "[REDACTED_DISCORD_TOKEN]",
      "groupPolicy": "allowlist",
      "guilds": {
        "1470656073450127441": {
          "channels": {
            "1470656923480358932": {
              "allow": true
            },
            "1470695146504060981": {
              "allow": true
            }
          }
        }
      }
    }
  },





Agent can plan before executing tasks. Use for deep research, complex tasks, or collaborative work