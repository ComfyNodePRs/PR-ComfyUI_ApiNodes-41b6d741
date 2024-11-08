from .string_api_node import StringApiNode
from .integer_api_node import IntegerApiNode

NODE_CLASS_MAPPINGS = {
  "String API Node": StringApiNode,
  "Integer API Node": IntegerApiNode,
}

__all__ = ['NODE_CLASS_MAPPINGS']
