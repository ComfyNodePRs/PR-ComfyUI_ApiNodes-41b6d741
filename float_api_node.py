import json
import os

class FloatApiNode:
    CATEGORY = "api"
    RETURN_TYPES = ("FLOAT",)
    RETURN_NAMES = ("output",)
    FUNCTION = "forward_number"

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "name": ("STRING", {"default": "name"}),
                "default_value": ("FLOAT", {"default": 0.0}),
            },
        }

    def forward_number(self, name, default_value):
      return (default_value, )
