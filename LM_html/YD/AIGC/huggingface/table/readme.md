- 顶级大厂需要看到了实习生github 页面？
- fork （vue , huggingface）
    开源的力量
- 给一个开源repo贡献代码

- 思想切换
    前端  切到 后端
    前端： DOM BOM
    后端： I/O 数据库 network 服务器 api 文件系统 操作系统

- 管家
    指令交给他
    向 厨师，花匠.... 发号命令
    自动的把任务 AutoGen
    是一个叫做UserProxyAgent 的对象


//---------------------------------------------------------------------------------------------------------------------------------
!pip install pyautogen~=0.1.0 -q -U

使用了pip工具来安装Python包，具体来说，是安装名为pyautogen的包。
//---------------------------------------------------------------------------------------------------------------------------------
config_list = [{
    'model':'gpt-3.5-turbo',
    'api_key':'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'
}]

llm_config = {
  "timeout":600,
  # "cache_seed":42,
  "config_list":config_list,
  "temperature":0  
}

解释：
config_list是一个包含字典的列表，其中每个字典包含了一个模型和相应的API密钥。在这里，config_list中只有一个字典，表示一个使用"GPT-3.5-turbo"模型的配置。

'model': 'gpt-3.5-turbo': 指定使用的语言模型为"gpt-3.5-turbo"，这是OpenAI GPT-3的一个变种。

'api_key': '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': 提供用于访问OpenAI API的密钥。请注意，此处显示的是一个示例密钥，实际应用中需要使用有效的密钥。

llm_config是一个包含语言模型配置的字典，包括以下键值对：

"timeout": 600: 设置请求超时时间为600秒。即，如果语言模型请求超过此时间未完成，请求将被中断。

"config_list": config_list: 使用先前定义的config_list，即指定使用的语言模型和相应的API密钥。

"temperature": 0: 设置温度参数为0。在语言模型中，温度参数用于调整生成文本的创造性程度。较低的温度（接近0）会导致模型生成更加确定性和保守的输出。

"cache_seed": 42: 这一行代码被注释掉了。如果需要缓存结果以提高性能，可以取消注释并提供缓存的种子值。
//---------------------------------------------------------------------------------------------------------------------------------
# 实例化用户代理agent对象 管家
# 授权
import autogen
user_proxy = autogen.UserProxyAgent(
    name="GuanYi", # 指定用户代理的名称为"GuanYi"。
    human_input_mode = "TERMINATE",# 指定人类输入模式为"TERMINATE"，表示在满足某些条件时，人类可以终止自动生成的代码。
    max_consecutive_auto_reply=10, # 指定最大连续自动回复的次数为10。这可能与自动生成的代码的自动回复机制有关。
    code_execution_config={"work_dir":"."},  # 提供了一个代码执行的配置，其中设置了工作目录为当前目录（"."）。
    system_message="Reply TERMINATE if the task has been solved at full satisfaction.Otherwise, reply CONTINUE, or the reason why the task is not solved yet."
    # 提供了一个系统消息，用于提示用户在何种情况下终止任务。消息是 
    # "Reply TERMINATE if the task has been solved at full satisfaction. Otherwise, reply CONTINUE, or the reason why the task is not solved yet."。
)
# 助力Agent
assistant = autogen.AssistantAgent(
    name="assistant",
    # 由大模型给
    llm_config=llm_config
)

//---------------------------------------------------------------------------------------------------------------------------------
user_proxy.initiate_chat(
    assistant,
    message="""
    List all the files in the sample_data folder
    """
)

解释：
user_proxy: 这是一个在之前提到的autogen模块中创建的UserProxyAgent对象。

initiate_chat: 这是UserProxyAgent对象的一个方法，用于发起一次对话。

assistant: 这是另一个对象，可能是一个对话或交互系统的助手对象。initiate_chat方法会与这个助手对象进行交互。

message: 这是一个参数，其中包含用户代理向助手发送的消息。在这里，消息是一个多行的字符串，内容是 "List all the files in the sample_data folder"，表示用户要求列出名为"sample_data"的文件夹中的所有文件。

该代码的目的是通过用户代理与助手对象发起一次对话，并传递了一个包含用户请求的消息。这种场景通常用于测试对话系统的交互性能或进行自动化测试。
//---------------------------------------------------------------------------------------------------------------------------------

