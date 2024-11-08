from .string_api_node import StringApiNode
from .integer_api_node import IntegerApiNode
from .float_api_node import FloatApiNode
from .any_api_node import AnyApiNode

NODE_CLASS_MAPPINGS = {
  "String API Node": StringApiNode,
  "Integer API Node": IntegerApiNode,
  "Float API Node": FloatApiNode,
}

__all__ = ['NODE_CLASS_MAPPINGS']
