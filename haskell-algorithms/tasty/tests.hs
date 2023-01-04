import Test.Tasty
import Test.Tasty.HUnit
import MyModule

-- Test that the 'add' function works correctly
testAdd :: TestTree
testAdd = testCase "Testing 'add' function" $ do
  assertEqual "add 2 and 3 should be 5" 5 (add 2 3)
  assertEqual "add (-2) and 3 should be 1" 1 (add (-2) 3)

-- Test that the 'subtract' function works correctly
testSubtract :: TestTree
testSubtract = testCase "Testing 'subtract' function" $ do
  assertEqual "subtract 3 from 5 should be 2" 2 (subtract 5 3)
  assertEqual "subtract 3 from (-2) should be (-5)" (-5) (subtract (-2) 3)

-- Put the tests together into a test group
tests :: TestTree
tests = testGroup "All Tests" [testAdd, testSubtract]

main :: IO ()
main = defaultMain tests