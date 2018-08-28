# Write a method called 'sum_rec' that
# recursively calculates the sum of an array of values

def sum_rec(nums)
  return 0 if nums.empty?
  nums[0] + sum_rec(nums[1..-1])
end
