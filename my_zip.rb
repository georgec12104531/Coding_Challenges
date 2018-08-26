# Process:

# -  Add self with the other arrs
# -  Create an array with self.length sub arrays
# - iterate through the length othe self -1
# - iterate through the different arrays
# - use the same index final_array[i] << array[i]
# - return the final_array



class Array

  def my_zip(*arrs)
    arrs.unshift(self)
    final_zip = Array.new(self.length) { [] }
    (0...self.length).each do |i|
      arrs.each do |array|
        final_zip[i] << array[i]
      end
    end
    final_zip
  end
end
