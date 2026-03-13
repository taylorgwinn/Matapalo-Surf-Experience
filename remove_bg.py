from PIL import Image
import numpy as np

img = Image.open("/Users/taylorgwinn/matapalo-surf/images/LOGO_Mesa de trabajo 1.png").convert("RGBA")
data = np.array(img)

r, g, b, a = data[:,:,0], data[:,:,1], data[:,:,2], data[:,:,3]
white_mask = (r > 220) & (g > 220) & (b > 220)
data[white_mask, 3] = 0

result = Image.fromarray(data)
result.save("/Users/taylorgwinn/matapalo-surf/images/logo.png")
print("Done")
