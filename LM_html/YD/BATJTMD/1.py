# 字符串模版
# 可以换行

# 描述细节需求
# 分布去执行

# import openai
# openai.api_key = "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"
# COMPLETION_MODEL = "text-davinci-003" #模型常量 达芬奇 完成

prompt = """


Consideration product:工厂现货PVC充气青蛙夜市地摊热卖充气玩具发光蛙儿童有趣玩具

1. Compose human readable product title used on Amazon in english within 20 words
2. Write 5 selling points for the products in Amazon
3. Evaluat a price range for this product in U.S. dollars

Output the result in json format with three properties called title,
selling_points and price_range

"""

# 定义函数
# def get_response(prompt):
#   completions = openai.Completion.create(
#     #大模型很值钱
#     engine = COMPLETION_MODEL, #模型
#     prompt = prompt, #提示词
#     max_tokens = 512, #省点
#     n = 1, # 1条
#     stop = None, #不要停下来
#     temperature = 0.0 #自由发挥度 0-2 值越大就越随意
#   )
#   print(completions)
#   message = completions.choices[0].text #
#   return message  

# print(get_response(prompt))