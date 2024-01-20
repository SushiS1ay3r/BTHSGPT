# import openai
# import os
# import pandas as pd
# import time

# openai.api_key = os.environ["OPENAI_API_KEY"]

# def gpt_response(prompt):
#     response = openai.Completion.create(
#     engine="davinci",
#     prompt=prompt,
#     max_tokens=1024,
#     n=1,
#     stop=None,
#     temperature=0.1,
#     frequency_penalty=1,
#     )

#     return response.choices[0].text.strip()


# import openai
# openai.api_key = ""

# prompt = "Hello, my name is John and I am a software engineer."
# model = "text-davinci-003"
# response = openai.Completion.create(engine=model, prompt=prompt, max_tokens=50)

# generated_text = response.choices[0].text
# print(generated_text)


# import openai
# openai.api_key = ""

# context = "You are chatting with a customer service representative."
# message = "Hi, I have a problem with my account."
# response = openai.completions.create(
#   engine="gpt-3.5-turbo",
#   prompt=f"Chat:\n{context}\nUser: {message}\n",
#   max_tokens=50
# )

# # reply = response.choices[0].text.strip()
# # print(reply)

# import os
# from openai import OpenAI
# client = OpenAI()
# OpenAI.api_key = os.getenv('')

# completion = client.chat.completions.create(
#   model = 'gpt-3.5-turbo',
#   messages = [
#     {'role': 'user', 'content': 'Hello!'}
#   ],
#   temperature = 0  
# )

# print(completion.choices[0].message.content)


