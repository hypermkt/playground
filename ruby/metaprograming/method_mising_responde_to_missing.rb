class Sample
  def method_missing(name, *args)
    if name =~ /^to_*/
      [name, *args] # => [:to_sample, "sample args1", "sample args2"]
      return
    else
      super
    end
  end

  def respond_to_missing?(sym, include_private)
    (sym =~ /^to_*/) ? true : super
  end
end

s = Sample.new
s.to_sample("sample args1", "sample args2")
p s.respond_to?(:to_sample)  # => true
p s.respond_to?(:sample)    # => false
