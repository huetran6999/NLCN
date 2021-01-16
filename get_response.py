import sys
from pprint import pprint
from chatterbot import ChatBot
from chatterbot.trainers import ListTrainer
my_bot = ChatBot(name='My_First_Bot', read_only = True, logic_adapters=['chatterbot.logic.BestMatch'],database_uri='sqlite:///database.sqlite3',storage_adapter='chatterbot.storage.SQLStorageAdapter')
# a,b,c=my_bot.generate_response()
inputt = ' '.join(sys.argv[1:])
output = my_bot.get_response(inputt)
# print(my_bot.get_response(inputt))
# print('a b c')
# print(inputt)
# text.('utf8')

# message_bytes = bytes(getattr(output,'text'),'utf-8')
# message_bytes = bytes(getattr(output,'text'),'utf-8') getattr(output,'text').encode('utf-8')

# print(message_bytes)
# f = open("result.txt", "w")
# f.write(text)
# f.close()

a_byte_array = bytearray(getattr(output,'text'), "utf8")

byte_list = []
for byte in a_byte_array:
    binary_representation = bin(byte)
    byte_list.append(binary_representation)

# for byte in byte_list:
# result = ' '.join(byte_list)
result = ' '.join(format(x, 'b') for x in bytearray(getattr(output,'text'), 'utf-8'))
print(result)