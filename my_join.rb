# Process:
# - create a final string
# - iterate through the range with index
# - if i == 0 , final_string << el
# - else str + el
# - return the final string

class Array

  def my_join(str = "")
    join_str = ""
    (0...self.length).each do |i|
      current_el = self[i]
      join_str << str unless i == 0
      join_str << current_el
    end
    join_str
  end

end
