#
# required so Brendan has some views to work his magic
#
class FrontendController < ApplicationController
  include ReactOnRails::Controller

  def index
    redux_store("store", props: { comments: [] })
    render_html
  end

  private

  def render_html
    respond_to do |format|
      format.html
    end
  end
end
