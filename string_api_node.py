import json
import os

class StringApiNode:
    CATEGORY = "api"
    RETURN_TYPES = ("STRING",)
    RETURN_NAMES = ("output",)
    FUNCTION = "forward_string"

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "name": ("STRING", {"default": "name"}),
                "default_value": ("STRING", {"default": "default value", "multiline": True}),
            },
        }

    def forward_string(self, name, default_value):
      return (default_value, )
