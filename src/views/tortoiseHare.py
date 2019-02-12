import random

#initialize totals
tortoise = 0
hare = 0

#get input
race_distance = int(input('enter a race distance: \n'))
#cast input as int


for counter in range(race_distance):

    #ramdom variable intialization
    num_tortoise = random.randint(1,11)
    num_hare = random.randint(1,11)

    if num_tortoise in range(0,6):
        tortoise = tortoise + 3
        print('tortoise moves forward 3\n')
    elif num_tortoise in range(6,8):
        tortoise = tortoise - 6
        print('tortoise moves back 6\n')
    elif num_tortoise in range(8,11):
        tortoise = tortoise + 1
        print('tortoise moves forward 1\n')

    if num_hare in range(0,3):
        print('hare doesnt move\n')
    elif num_hare in range(3,5):
        hare = hare + 9
        print('hare moves forward 9 \n')
    elif num_hare == 5:
        hare = hare - 12
        print('hare moves back 12 \n')
    elif num_hare in range(6,9):
        hare = hare + 1
        print('hare moves forward 9\n\n')
    elif num_hare in range(9,11):
        hare = hare - 2
        print('hare moves back 9 \n')
#stop score from going lower than 0
if hare < 0:
    hare = 0
    
if tortoise < 0:
    tortoise = 0

#print totals
print(tortoise)
print(hare)