# 客服
- 人工智能的堂客
    NLP
- 人工客服和NLP客服并存的 十五年
    简单的，重复的，相似的问题
    语义的理解 + 回复的生成更牛逼

- pip
    python 包管理器，
    pip install openai==0.10.2
    pip install transformers

- AIGC +
    前端/后端 快速拥有NLP能力
    - 前端负责用户体验
    - 后端 业务逻辑
    - 算法工程师

- A I G C 客服
  prompt + LLM(openAI)
  - python语法?
    pip python3
    import openai 导入openai
    python 弱类型 大写的就是const

  - 调用openai.Completion.create(
    参数dict
    在背后进行https的调用davince 模块
  ) 

  - 前后端数据交流的格式是JSON


  案例：
# 基于openai 的大模型来强化客服能力
import openai
# api_key
openai.api_key="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"
# 常量 文本生成的模型
COMPLETION_MODEL="text-davinci-003"
# 系统后台生成了一条记录。再强调我们这个AIGC来生成客服
prompt="""请你使用朋友的语气回复到客户，并称他为亲，他的订单已经发货在路上了,预计在3天之内会送达，
订单号2021AEDG，我们很抱歉因为天气的原因物流时间比原来长，感谢他选购我们的商品。"""

# 封装了openai 回复的功能
def get_response(prompt,temperature=0.2):
  # Completion模块
  # 生成内容 同步的
  # 调用openai库的Completion模块，创建一个新的
  # 字典 {k:v}
  completions = openai.Completion.create(
    engine=COMPLETION_MODEL, # 使用什么引擎
    prompt=prompt, # 指令
    max_tokens=1024, # 最大花销
    n=1, # 返回一条结果
    stop=None, # 不要停下来
    temperature=temperature # 自由度
  )
  # 返回结果由JSON 返回 text
  print(completions)
  message = completions.choices[0].text
  return message