# -*- coding: utf-8 -*-

import pyqrcode
from pyqrcode import QRCode

s = input("Digite o texto/url a ser transformado: \n")
n = input("Digite o nome de saida: \n")

qrcode = pyqrcode.create(s)
qrcode.png(n+".png", scale=2, module_color = [0, 0, 0, 128],background=[0xFF, 0xFF, 0xcc])
qrcode.show()