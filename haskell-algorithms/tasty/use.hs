import MyModule

main = do
  let x = MyModule.add 2 3
  let y = MyModule.subtract 5 3
  putStrLn (show x)
  putStrLn (show y)