import json
import os

class AlwaysEqualProxy(str):
    def __eq__(self, _):
        return True

    def __ne__(self, _):
        return False

class AnyApiNode:
    CATEGORY = "api"
    RETURN_TYPES = (AlwaysEqualProxy("*"),)
    RETURN_NAMES = ("output",)
    FUNCTION = "forward_any"

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "name": ("STRING", {"default": "name"}),
                "default_value": ("STRING", {"default": "default value", "multiline": True}),
            },
        }

    def forward_any(self, name, default_value):
      return (default_value, )
